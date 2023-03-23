import intooutMenu from '@/assets/data/intooutMenu.json';
import intooutMenu2 from '@/assets/data/intooutMenu_fan.json';
import investItems from '@/assets/data/investItems.json';
import investMenu from '@/assets/data/investMenu.json';
import investMenu2 from '@/assets/data/investMenu_fan.json';
import itemCards from '@/assets/data/itemCards.json';
import itemCards2 from '@/assets/data/itemCards_fan.json';
import tagsList from '@/assets/data/tagList.json';
import tagsList2 from '@/assets/data/tagList_fan.json';
import useMenu from '@/assets/data/useMenu.json';
import useMenu2 from '@/assets/data/useMenu_fan.json';
import MenuList from '@/components/Investment/menuLIst/MenuList';
import Play from '@/components/Investment/play/Play';
import Footer, { FooterState } from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, reactive, watch, Fragment } from 'vue';
if (window.location.search.includes('true')) {
    FooterState.isFan = true;
}
export const InvestState = reactive({
    activeKey: 'cross-chain-swap' as string,
    inviteItmes: investItems as { [key: string]: any },
    activePlayId: [] as any,
    activePlayList: FooterState.isFan ? itemCards2.items : itemCards.items as any,
    tagsList: FooterState.isFan ? tagsList2.tags : tagsList.tags as any,
    searchValue: '' as string,
    menuList: FooterState.isFan ? investMenu2 : investMenu as any,
});
import { invest_card, left, left_right, menu, navbar, right, selector } from './Index.module.scss';

export function updatePlay(newKey: string) {
    if (InvestState.inviteItmes[newKey]) {
        InvestState.activePlayId = InvestState.inviteItmes[newKey];
        if (FooterState.isFan) {
            InvestState.activePlayList = itemCards2.items?.filter(item => InvestState.activePlayId.includes(item.id));
        } else {
            InvestState.activePlayList = itemCards.items?.filter(item => InvestState.activePlayId.includes(item.id));
        }
    }
}

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
        updatePlay('cross-chain-swap');
        if (window.location.search.split('=')?.[2]?.includes('intoout')) {
            this.current_index = 3;
            this.s_width = '150px';
            this.s_left = '935px';
            if (FooterState.isFan) {
                InvestState.menuList = intooutMenu2;
            } else {
                InvestState.menuList = intooutMenu;
            }
            if (decodeURI(window.location.search?.split('=')?.[3])) {
                InvestState.activeKey = InvestState.menuList?.filter((item: any) => item.label === decodeURI(window.location.search?.split('=')?.[3]))?.[0]?.key;
                updatePlay(InvestState.activeKey);
            }
        } else if (window.location.search.split('=')?.[2]?.includes('use')) {
            this.current_index = 2;
            this.s_width = '110px';
            this.s_left = '630px';
            if (FooterState.isFan) {
                InvestState.menuList = useMenu2;
            } else {
                InvestState.menuList = useMenu;
            }
            if (decodeURI(window.location.search?.split('=')?.[3])) {
                InvestState.activeKey = InvestState.menuList?.filter((item: any) => item.label === decodeURI(window.location.search?.split('=')?.[3]))?.[0]?.key;
                updatePlay(InvestState.activeKey);
            }
        } else {
            this.current_index = 1;
            this.s_width = '110px';
            this.s_left = '305px';
            if (FooterState.isFan) {
                InvestState.menuList = investMenu2;
            } else {
                InvestState.menuList = investMenu;
            }
            if (decodeURI(window.location.search?.split('=')?.[3])) {
                InvestState.activeKey = InvestState.menuList?.filter((item: any) => item.label === decodeURI(window.location.search?.split('=')?.[3]))?.[0]?.key;
                updatePlay(InvestState.activeKey);
            } else {
                updatePlay('cross-chain-swap');
            }
        }
        watch(() => InvestState.activeKey, newValue => {
            if (newValue) updatePlay(newValue);
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
                            InvestState.activeKey = 'cross-chain-swap';
                            if (FooterState.isFan) {
                                InvestState.menuList = investMenu2;
                            } else {
                                InvestState.menuList = investMenu;
                            }
                        }}>{FooterState.isFan ? '投資' : '投资'}</div>
                        <div style={{ color: `${this.current_index === 2 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 2;
                            this.s_width = '110px';
                            this.s_left = '630px';
                            InvestState.activeKey = 'consume';
                            if (FooterState.isFan) {
                                InvestState.menuList = useMenu2;
                            } else {
                                InvestState.menuList = useMenu;
                            }
                        }}>用途</div>
                        <div style={{ color: `${this.current_index === 3 ? '#5160CE' : '#fff'}` }} onClick={() => {
                            this.current_index = 3;
                            this.s_width = '150px';
                            this.s_left = '935px';
                            InvestState.activeKey = 'centralized-transaction';
                            if (FooterState.isFan) {
                                InvestState.menuList = intooutMenu2;
                            } else {
                                InvestState.menuList = intooutMenu;
                            }
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