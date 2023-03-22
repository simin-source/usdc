import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import AleftRight from '@/components/Asvantage/leftRight/index';
import MenuListUse from '@/components/Use/menuList/index'
// import { } from './Index.module.scss';

export default defineComponent({
    name: 'Use',
    render() {
        return <Fragment>
            <Header parent="use" />
            <AleftRight />
            <MenuListUse/>
            <Footer parent="use" />
        </Fragment>;
    },
});