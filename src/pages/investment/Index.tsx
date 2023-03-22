import intooutMenu from '@/assets/data/intooutMenu.json';
import investItems from '@/assets/data/investItems.json';
import investMenu from '@/assets/data/investMenu.json';
import itemCards from '@/assets/data/itemCards.json';
import tagsList from '@/assets/data/tagList.json';
import useMenu from '@/assets/data/useMenu.json';
import MenuList from '@/components/Investment/menuLIst/MenuList';
import Play from '@/components/Investment/play/Play';
import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, reactive, watch, Fragment } from 'vue';
export const InvestState = reactive({
    activeKey: '' as string,
    inviteItmes: investItems as { [key: string]: any },
    activePlayId: [] as any,
    activePlayList: itemCards.items as any,
    tagsList: tagsList.tags as any,
    searchValue: '' as string,
    menuList: investMenu as any,
});
import { invest_card, left, left_right, menu, navbar, right, selector } from './Index.module.scss';

export default defineComponent({
    name: 'Investment',
    data() {
        return {
            s_width: '110px',
            s_left: '305px',
            current_index: 1,
        };
    },
    mounted() {
        watch(() => InvestState.activeKey, newValue => {
            console.log(newValue);
            if (newValue && InvestState.inviteItmes[newValue]) {
                InvestState.activePlayId = InvestState.inviteItmes[newValue];
                InvestState.activePlayList = itemCards.items?.filter(item => InvestState.activePlayId.includes(item.id));
            }
            console.log(InvestState.activePlayList);
        });
    },
    render() {
        return <Fragment>
            <Header parent="investment" />
            <div class={`content flex-start ${invest_card}`}>
                <div class={navbar}>
                    <div class={menu}>
                        <div style={{ color: `${this.current_index === 1 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 1;
                            this.s_width = '110px';
                            this.s_left = '305px';
                            InvestState.menuList = investMenu;
                        }}>投资</div>
                        <div style={{ color: `${this.current_index === 2 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 2;
                            this.s_width = '110px';
                            this.s_left = '630px';
                            InvestState.menuList = useMenu;
                        }}>用途</div>
                        <div style={{ color: `${this.current_index === 3 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 3;
                            this.s_width = '150px';
                            this.s_left = '935px';
                            InvestState.menuList = intooutMenu;
                        }}>入金&出金</div>
                    </div>
                    <div class={selector} style={{ width: `${this.s_width}`, left: `${this.s_left}` }}>
                        <div class={left}></div>
                        <div class={right}></div>
                    </div>
                </div>
                <div class={`flex-center ${left_right}`}>
                    <MenuList />
                    <Play />
                </div>
            </div>
            {/* <Footer parent="investment" /> */}
        </Fragment >;
    },
});