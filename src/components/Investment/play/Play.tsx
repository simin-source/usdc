import { InvestState } from '@/pages/investment/Index';
import { FooterState } from '@/views/footer/Footer';
import { ElInput } from 'element-plus';
import { defineComponent } from 'vue';
import {
    card, card_desc, card_list, card_logo, none, play_box, search, tag, tag_list, title
} from './Play.module.scss';

export default defineComponent({
    name: 'Play',
    data() {
        return {
            searchVal: '',
            list: InvestState.activePlayList
        }
    },
    methods: {
        handleChange() {
            if (InvestState.searchValue) {
                var str = InvestState.searchValue;
                var upperStr = str.toUpperCase()
                var lowerStr = str.toLowerCase();
                let result: any = []
                for (var i = 0; i < InvestState.activePlayList.length; i++) {
                    //如果字符串中不包含目标字符会返回-1
                    if (InvestState.activePlayList[i].name.indexOf(InvestState.searchValue) >= 0) {
                        result.push(InvestState.activePlayList[i]);
                    } if (InvestState.activePlayList[i].name.indexOf(upperStr) >= 0) {
                        result.push(InvestState.activePlayList[i]);
                    } if (InvestState.activePlayList[i].name.indexOf(lowerStr) >= 0) {
                        result.push(InvestState.activePlayList[i]);
                    }
                }
                var newArr = Array.from(new Set(result));
                InvestState.activePlayList = newArr
                console.log(result);

                return InvestState.activePlayList



            } else {
                return InvestState.activePlayList
            }

        },
        handelClear() {
            if (!InvestState.searchValue) {
                InvestState.activePlayList = this.list
                return InvestState.activePlayList
            }
        }
    },
    render() {
        return <div class={`flex-start ${play_box}`}>
            <div class={`flex-between ${search}`}>
                <div class={`flex-center ${title}`}>
                    {FooterState.isFan ? '玩法說明:' : '玩法说明:'}
                </div>
                <div class="search_input">
                    <ElInput v-model={InvestState.searchValue} onChange={this.handleChange} size="large" placeholder="Please Input" clearable onClear={this.handelClear} />
                </div>
            </div>
            <div class={card_list}>
                <div>
                    {InvestState.activePlayList?.length > 0 ? InvestState.activePlayList?.map((item: any) => {
                        return <div class={card}>
                            <div><img src={item.src ? item.src : '/img/index/card1.svg'} alt="logo找不到" class={card_logo} /></div>
                            <div class={`flex-start ${tag_list}`}>
                                {item.tag?.map((item_: any, index: number) => {
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
                    }) : <div class={`flex-center ${none}`}>无</div>}
                </div>
            </div>
        </div>;
    },
});