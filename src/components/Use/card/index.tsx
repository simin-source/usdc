import useData from '@/assets/data/use/useCards.json';
import useData2 from '@/assets/data/use/useCards_fan.json';
import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import {
    card, card_box, section
} from './index.module.scss';

export default defineComponent({
    name: 'USevenCard',
    data() {
        return {
            contentList: FooterState.isFan ? useData2 : useData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.contentList = useData2;
            } else {
                this.contentList = useData;
            }
        });
    },
    render() {
        return <div class={`container ${card_box}`}>
            <div class="content flex-center">
                <div class={`flex-between ${section}`}>
                    {this.contentList?.map((item: any) => {
                        return <div class={card}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>;
                    })}
                </div>
            </div>
        </div>;
    },
});