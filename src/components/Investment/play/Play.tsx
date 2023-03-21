import { InvestState } from '@/pages/investment/Index';
import { ElInput } from 'element-plus';
import { defineComponent } from 'vue';
import {
    card, card_desc, card_list, card_logo, none, play_box, search, tag, title, tag_list
} from './Play.module.scss';

export default defineComponent({
    name: 'Play',
    methods: {
        handleChange() {

        },
    },
    render() {
        return <div class={`flex-start ${play_box}`}>
            <div class={`flex-between ${search}`}>
                <div class={`flex-center ${title}`}>
                    玩法说明:
                </div>
                <div class="search_input">
                    <ElInput v-model={InvestState.searchValue} onChange={this.handleChange} size="large" placeholder="Please Input" clearable />
                </div>
            </div>
            <div class={`flex-start ${card_list}`}>
                {InvestState.activePlayList?.length > 0 ? InvestState.activePlayList?.map((item: any) => {
                    return <div class={card}>
                        <div><img src={item.src ? item.src : '/img/index/card1.svg'} alt="logo找不到" class={card_logo} /></div>
                        <div class={`flex-start ${tag_list}`}>
                            {item.tag?.map((item_: any, index: number) => {
                                if (index > 2) return null;
                                const res = InvestState.tagsList?.filter((i: any) => i.id === item_.tag_id)?.[0];
                                if (res?.name?.ch) {
                                    return <div class={tag}>{res?.name?.ch}</div>;
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                        <div class={card_desc}>{item.description_ch}</div>
                    </div>;
                }) : <div class={none}>无</div>}
            </div>
        </div>;
    },
});