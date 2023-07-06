

const defineDirective  = (app)=>{
    app.directive('lazy',{
        // el表示使用指令的DOM元素
        // bindings表示指令相关的信息是一个对象 如v-lazy="xxx",bindlings即是xxx对应的内容
        mounted(el,bindings){
            const oberver = new IntersectionObserver(([{isIntersecting}]) =>{
                //元素出现在可视区域
                if(isIntersecting){
                    //加载图片
                    el.src = bindings.value;
                    //取消监听
                    oberver.unobserve(el);
                     
                }
            })
            //监听Dom元素
            oberver.observe(el);
        },
    })
    
}
export default {
    install(app){
        defineDirective(app);
    }
}