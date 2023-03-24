import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import {
    left, list, list_item, lr_box, right, text, title
} from './LeftRight.module.scss';

import contentData from '@/assets/data/home/leftright.json';
import contentData2 from '@/assets/data/home/leftright_fan.json';

export default defineComponent({
    name: 'LeftRight',
    data() {
        return {
            contentList: FooterState.isFan ? contentData2 : contentData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.contentList = contentData2;
            } else {
                this.contentList = contentData;
            }
        });
    },
    render() {
        return <div class={`container ${lr_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${list}`}>
                    {this.contentList?.map((item: any) => {
                        return <div class={`flex-between ${list_item}`}>
                            <div class={left}>
                                <div class={title}>{item.title}</div>
                                <div class={text}>{item.text}</div>
                            </div>
                            <div class={right}>
                                <img src={item.src} alt="图片找不到" />
                            </div>
                        </div>;
                    })}
                </div>
            </div>
        </div>;
    },
});