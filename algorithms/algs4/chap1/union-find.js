/**
 *  Union-find
 */

function UnionFind(N)
{
    this.n = N;
    this.total_count = this.n;
    this.id = new Array(this.n);
    this.sz = new Array(this.n);
    for(var i=0;i<this.n;i++){
        this.id[i] = i;
        this.sz[i] = 1;
    }

    this.union = function(p,q){
        var i = this.find(p);
        var j = this.find(q);
        if(i==j)
            return;
        if(this.sz[i]<this.sz[j]){
            this.id[i] = j;
            this.sz[j]+=this.sz[i];
        }
        else{
            this.id[j] = i;
            this.sz[i] += this.sz[j];
        }
        this.total_count--;
    };

    this.find = function(p){
        while( p != this.id[p] )
            p = this.id[p];
        return p;
    };

    this.connected = function(p,q){
        return this.find(p) == this.find(q);
    };

    this.count = function(p,q){
        return this.total_count;
    };
}