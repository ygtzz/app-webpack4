import assign from 'object-assign';

function MyScroll(opts){
    opts = assign({
        container:'.scrollc',
        total: 0,
        step: 750,
        delay: 300,
        interval: 3000,
        direction: 'left' //right,top,down
    }, opts);
    this.opts = opts;
    console.log(opts);

    var self = this;    
    var scrollc = document.querySelector('.scrollc');    
    var scrolls = scrollc.firstChild;
    self._insertLoopNode(scrolls);
    self._setContainerWidth(scrolls);

    var cur = self.opts.step,
        step = self.opts.step,
        delay = self.opts.delay;
    setTimeout(function(){
        self._addClass(scrolls,'moving');
        setInterval(function(){
            cur += step;
            self._translate(scrolls,-cur);
            console.log(new Date(),cur);
            setTimeout(function(){
                if(-cur <= -(self.total - step)){
                    self._resetPos(scrolls);
                    cur = step;
                }
            },delay);
        },self.opts.interval); 
    },delay);
}

MyScroll.prototype._resetPos = function(container){
    var self = this,
        step = this.opts.step;
    this._removeClass(container,'moving');
    this._translate(container, -step);
    //transitionend 
    setTimeout(function(){
        self._addClass(container,'moving');          
    },this.opts.delay);
}

MyScroll.prototype._insertLoopNode = function(container){
    var children = container.children;
    var first = children[0],
        last = children[children.length-1];
    container.insertBefore(last.cloneNode(true),first);
    container.appendChild(first.cloneNode(true));
}

MyScroll.prototype._setContainerWidth = function(container){
    var children = container.children;            
    var aChild = Array.prototype.slice.call(children);
    var total = 0;
    var len = aChild.length,
        itemWidth = 0;
    aChild.forEach((item) => {
        total += item.offsetWidth;
        itemWidth = item.offsetWidth;
    });
    this.total = total;
    container.style.width = total + 'px';
    //设置初始定位
    this._translate(container,-this.opts.step);
}

MyScroll.prototype._translate = function(dom,x,y){
    x = x || 0 ;
    y = y || 0;
    dom.style.WebkitTransform = `translate3d(${x}px,${y}px,0px)`;
    dom.style.transform = `translate3d(${x},${y},0)`;
}

MyScroll.prototype._addClass = function(dom,className){
    dom.classList.add(className);
}

MyScroll.prototype._removeClass = function(dom,className){
    dom.classList.remove(className);
}

export {MyScroll}