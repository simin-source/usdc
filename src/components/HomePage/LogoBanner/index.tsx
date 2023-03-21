import { defineComponent, onMounted ,ref} from 'vue';
import {
    logo_banner, text,title,swiper_content,swiper_item,swiper_swper ,item,wrap
} from './index.module.scss';
import './index.module.scss'
import SwiperCore, { Autoplay,  } from 'swiper';
SwiperCore.use([Autoplay,]);
import { Swiper,SwiperSlide } from 'swiper/vue';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import  jsonData from  '@/assets/data/itemCards.json'
let ouplay = { delay: 500, pauseOnMouseEnter: true ,disableOnInteraction:false}
let index = ref(0)
let timer : any = null
const swper = ref(null)
let SwiperSlidea = jsonData
let SwiperSlideData = SwiperSlidea.items
let animate = () => {
    let swiper :any = document.getElementById('wrap')
    let swiper1: any = document.getElementById('wrap1')
    console.log(swiper);
 timer = setInterval(() => {
        index.value++
        swiper.style.transform = `translateX(${-3 * index.value}px)`
        swiper1.style.transform = `translateX(${-3 * index.value}px)`
        if(index.value*3 >= 270*SwiperSlideData.length){
            setTimeout(() => {
                index.value = 0
                swiper.style.transform = `translateX(0)`
                swiper.style.transition = '0s'
                swiper1.style.transform = `translateX(0)`
                swiper1.style.transition = '0s'
            }, 10)
            
        }
    }, 30)
}
let mouseEenter = () => {
    clearInterval(Number(timer))
}
let mouseLeve = () => {
    animate()
}

const onMenuClick = (item: { link: string }) => {
  if (item.link.startsWith('http')) {
    window.open(item.link);
  }
}
export default defineComponent({
    name: 'LogoBaner',
    setup() {
        onMounted(() => {
            animate()
        })
     
        return()=> { 
            return <div class={`container ${logo_banner}`}>
                <div>
                <h3 class={title}>Widespread adoption</h3>
                <div class={text}>From being the first, to the most used, stablecoin, and one of the most traded tokens by volume, Tether tokens have come a long way. Tether tokens are today the most widely adopted stablecoins across major exchanges, OTC desks, and wallets, including:</div>    
                {/* <Swiper class={swiper_content} loop={true} slidesPerView={4} autoplay={ ouplay } >
                        {SwiperSlideData.map(e => {
                            return <SwiperSlide>
                                <div class={swiper_item} ref={swper}>
                                    <a href={e.link}><img src={e.src} alt={e.description_ch} /> </a>
                        </div>
                    </SwiperSlide>
                })}
                    </Swiper> */}
                <div class={swiper_swper}>
                    <div id="wrap" class={wrap} ref="swiper"  onMouseenter={mouseEenter} onMouseleave={mouseLeve}>
                            
                                {SwiperSlideData.map(e => {
                                    return <div class={item} onClick={(item:any)=> onMenuClick(item)}>
                                        <a href={e.link} ><img src={e.src} alt={e.description_ch} style={{ width:'80px' , height: '38px'}} /> </a>
                                    </div>
                                })}
                            
                    </div>
                        <div id="wrap1" >
                            
                                {SwiperSlideData.map(e => {
                                    return <div  onClick={(item:any)=> onMenuClick(item)}>
                                    <a href={e.link} ><img src={e.src} alt={e.description_ch} style={{ width:'80px' , height: '38px'}} /> </a>
                                    </div>
                                })}
                            
                        </div>
                    </div>
       </div>
    </div>
               
        }
    }
  
})