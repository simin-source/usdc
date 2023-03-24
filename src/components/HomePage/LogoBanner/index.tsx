import SwiperCore, { Autoplay, } from 'swiper';
import { defineComponent, onMounted, ref } from 'vue';
import {
    button_group, item, logo_banner, swiper_swper, text, title, wrap
} from './index.module.scss';
SwiperCore.use([Autoplay]);
import jsonData from '@/assets/data/invest/itemCards.json';
import { FooterState } from '@/views/footer/Footer';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
const index = ref(0);
let timer: any = null;
const SwiperSlidea = jsonData;
const SwiperSlideData = SwiperSlidea.items;
const animate = () => {
    const swiper: any = document.getElementById('wrap');
    const swiper1: any = document.getElementById('wrap1');
    timer = setInterval(() => {
        index.value++;
        swiper.style.transform = `translateX(${-3 * index.value}px)`;
        swiper1.style.transform = `translateX(${-3 * index.value}px)`;
        if (index.value * 3 >= 270 * SwiperSlideData.length) {
            setTimeout(() => {
                index.value = 0;
                swiper.style.transform = 'translateX(0)';
                swiper.style.transition = '0s';
                swiper1.style.transform = 'translateX(0)';
                swiper1.style.transition = '0s';
            }, 10);
        }
    }, 30);
};
const mouseEenter = () => {
    clearInterval(Number(timer));
};
const mouseLeve = () => {
    animate();
};

const onMenuClick = (item: { link: string }) => {
    if (item.link.startsWith('http')) {
        window.open(item.link);
    }
};
export default defineComponent({
    name: 'LogoBaner',
    setup() {
        onMounted(() => {
            animate();
        });
        return () => {
            return <div class={`container ${logo_banner}`} id="playBanner">
                <div class="content flex-center">
                    <h3 class={title}>{FooterState.isFan ? 'USDC能做什麽？' : 'USDC能做什么？'}</h3>
                    <div class={text}>
                        {FooterState.isFan ?
                            '基於上述優勢，USDC有許多不同的用途。持有USDC的企業及個人可以使用USDC進行：數字貨幣交易、跨境支付、借貸、投資套利、購買商品和服務。'
                            : '基于上述优势，USDC有许多不同的用途。持有USDC的企业及个人可以使用USDC进行：数字货币交易、跨境支付、借贷、投资套利、购买商品和服务。'}
                    </div>
                    <div class={button_group}>
                        <a href={`/use/?fan=${FooterState.isFan}`}>了解更多详细用途</a>
                        <a href={`/investment/?fan=${FooterState.isFan}`}>了解更多投资方法</a>
                    </div>
                    <div class={text}>{FooterState.isFan ? '以下平臺均支持USDC，並提供了各種豐富的玩法：' : '以下平台均支持USDC，并提供了各种丰富的玩法：'}</div>
                    <div class={swiper_swper}>
                        <div id="wrap" class={wrap} ref="swiper" onMouseenter={mouseEenter} onMouseleave={mouseLeve}>
                            {SwiperSlideData.map(e => {
                                return <div class={item} onClick={() => onMenuClick}>
                                    <a href={e.link} target='_blank'><img src={e.src} alt={e.description_ch} /> </a>
                                </div>;
                            })}
                        </div>
                        <div id="wrap1" class={wrap}>
                            {SwiperSlideData.map(e => {
                                return <div class={item} onClick={() => onMenuClick}>
                                    <a href={e.link} target='_blank'><img src={e.src} alt={e.description_ch} /> </a>
                                </div>;
                            })}
                        </div>
                    </div>
                </div>
            </div>;
        };
    },

});