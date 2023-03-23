import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import UleftRight from '@/components/Use/leftRight/index'
import MenuListUse from '@/components/Use/menuList/index'
// import { } from './Index.module.scss';
import USevenCard from '@/components/Use/eightCards/index'
export default defineComponent({
    name: 'Use',
    render() {
        return <Fragment>
            <Header parent="use" />
            <UleftRight />
            <MenuListUse />
            <USevenCard />
            <Footer parent="use" />
        </Fragment>;
    },
});