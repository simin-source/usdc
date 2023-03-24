import currencyData from '@/assets/data/use/dropCards.json';
import currencyData2 from '@/assets/data/use/dropCards_fan.json';
import { FooterState } from '@/views/footer/Footer';
import { ChevronDown, ChevronUpOutline } from '@vicons/ionicons5';
import { Icon } from '@vicons/utils';
import { defineComponent, watch } from 'vue';
import {
    card, drop_box, drop_list, drop_title
} from './DropCards.module.scss';

export default defineComponent({
    name: 'DropCards',
    data() {
        return {
            dropList: FooterState.isFan ? currencyData2 : currencyData as any,
            isSpread: false,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.dropList = currencyData2;
            } else {
                this.dropList = currencyData;
            }
        });
    },
    render() {
        return <div class={`container ${drop_box}`}>
            <div class="content flex-center">
                <div class="content flex-between">
                    <div class={drop_title}>{FooterState.isFan ? '給自己的產品接入數字貨幣支付' : '给自己的产品接入数字货币支付'}</div>
                    <div style={{ cursor: 'pointer' }} onClick={() => this.isSpread = !this.isSpread}>
                        {this.isSpread ? <Icon size="36" color="#000">
                            <ChevronUpOutline></ChevronUpOutline>
                        </Icon> : <Icon size="36" color="#000">
                            <ChevronDown></ChevronDown>
                        </Icon>
                        }
                    </div>
                </div>
                {this.isSpread ? <div class={`flex-between ${drop_list}`} style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                    {this.dropList?.map((item: any) => {
                        return <div class={`flex-between ${card}`}>
                            <h2>{item.title}</h2>
                            <p>{item.des}</p>
                            {!item.link.includes('fan') ? <a href={item.link} target="_blank" >更多</a>
                                : <a href={item.link.replace('fan=', `fan=${FooterState.isFan}`)}>更多</a>}
                        </div>;
                    })}
                </div> : null}
            </div>
        </div>;
    },
});