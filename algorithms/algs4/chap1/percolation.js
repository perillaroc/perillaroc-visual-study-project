
function Percolation(N){
    this.n = N;
    this.uf = new UnionFind(this.n*this.n+2);
    this.uf_visual = new UnionFind(this.n*this.n+1);
    this.status = new Array(this.n*this.n);

    for(var i=0;i<this.status.length;i++){
        this.status[i] = 0;
    }
    this.status[this.n*this.n]=1;

    this.open = function(i,j){
        if (i > this.n || i <= 0)
            return null;
        if (j > this.n || j <= 0)
            return null;

        var p1 = (i-1)*this.n + (j-1);
        this.status[p1] = 1;

        if (i == 1)
        {
            this.uf.union(p1, this.n*this.n);
            this.uf_visual.union(p1, this.n*this.n);
        }

        if (i == this.n)
        {
            this.uf.union(p1, this.n*this.n+1);
        }

        if (i > 1 && this.isOpen(i-1, j))
        {
            var p2 = p1-this.n;
            this.uf.union(p1, p2);
            this.uf_visual.union(p1, p2);
        }

        if (i < this.n && this.isOpen(i+1, j))
        {
            var p2 = p1+this.n;
            this.uf.union(p1, p2);
            this.uf_visual.union(p1, p2);
        }

        if (j > 1 && this.isOpen(i, j-1))
        {
            var p2 = p1-1;
            this.uf.union(p1, p2);
            this.uf_visual.union(p1, p2);
        }
        if (j < this.n && this.isOpen(i, j+1))
        {
            var p2 = p1+1;
            this.uf.union(p1, p2);
            this.uf_visual.union(p1, p2);
        }
    };

    this.isOpen = function(i,j){
        if (i > this.n || i <= 0)
            return null;
        if (j > this.n || j <= 0)
            return null;

        return this.status[(i-1)*this.n+j-1]>0;
    };

    this.isFull = function(i,j){
        if(!this.isOpen(i,j))
            return false;
        var index = (i-1)*this.n+j-1;
        return this.uf_visual.connected(index, this.n*this.n);
    };

    this.percolates = function(){
        return this.uf.connected(this.n*this.n, this.n*this.n+1);
    }
}