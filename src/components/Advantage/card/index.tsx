import { defineComponent, watch } from 'vue';
import {
    card, card_box, section, title
} from './index.module.scss';

import advantageData from '@/assets/data/advan/advanCards.json';
import advantageData2 from '@/assets/data/advan/advanCards_fan.json';
import { FooterState } from '@/views/footer/Footer';
import { ColorFilterOutline, DiamondOutline, EyeOutline, FlashOutline, GlobeOutline, InfiniteOutline, ShieldCheckmarkOutline, WalletOutline } from '@vicons/ionicons5';
import { Icon } from '@vicons/utils';

export default defineComponent({
    name: 'AeightCard',
    data() {
        return {
            contentList: FooterState.isFan ? advantageData2 : advantageData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.contentList = advantageData2;
            } else {
                this.contentList = advantageData;
            }
        });
    },
    render() {
        return <div class={`container ${card_box}`}>
            <div class="content flex-center">
                <div class={`flex-between ${section}`}>
                    {this.contentList?.map((item: any) => {
                        if (item.icon === 'DiamondOutline') {
                            return <>
                                <div class={card}>
                                    <Icon size="36" color="#d3b25b" >
                                        <DiamondOutline></DiamondOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;
                        } else if (item.icon === 'EyeOutline') {
                            return <>

                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <EyeOutline></EyeOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </>;

                        } else if (item.icon === 'ShieldCheckmarkOutline') {
                            return <>

                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <ShieldCheckmarkOutline></ShieldCheckmarkOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;
                        } else if (item.icon === 'InfiniteOutline') {
                            return <>

                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <InfiniteOutline></InfiniteOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;

                        } else if (item.icon === 'ColorFilterOutline') {
                            return <>
                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <ColorFilterOutline></ColorFilterOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;
                        } else if (item.icon === 'WalletOutline') {
                            return <>
                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <WalletOutline></WalletOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;
                        } else if (item.icon === 'FlashOutline') {
                            return <>
                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <FlashOutline></FlashOutline>

                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;
                        } else if (item.icon === 'GlobeOutline') {
                            return <>
                                <div class={card}>
                                    <Icon size="36" color="#d3b25b">
                                        <GlobeOutline></GlobeOutline>
                                    </Icon>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div></>;
                        }

                    })}
                </div>
            </div>
        </div>;
    },
});
