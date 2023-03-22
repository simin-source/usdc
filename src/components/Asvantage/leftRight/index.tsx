import { defineComponent } from 'vue';
import{lr_box,list,list_item,left,title,text,right} from './index.module.scss'
let contentData = [{
    title: 'Why use Tether?',
    src: '../../../../../img/index/bank.webp',
    text: 'Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin model and are the most widely traded. Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.'
}]
export default defineComponent({
    name: 'AleftRight',
    render() {
        return <div class={`container ${lr_box}`}>
        <div class="content flex-center">
            <div class={`flex-center ${list}`}>
                {contentData.map(item => {
                    return <div class={`flex-between ${list_item}`}>
                        <div class={left}>
                            <h2 class={title}>{item.title}</h2>
                            <div class={text}>{item.text}</div>
                        </div>
                        <div class={right}>
                            <img src={item.src} alt="图片找不到" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>;
    }
})