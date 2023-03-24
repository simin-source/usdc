import Banner from '@/components/Use/banner/Banner';
import Cards from '@/components/Use/card/index';
import MenuList from '@/components/Use/menuList/index';
import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
export default defineComponent({
    name: 'Use',
    render() {
        return <Fragment>
            <Header parent="use" />
            <Banner />
            <MenuList />
            <Cards />
            <Footer parent="use" />
        </Fragment>;
    },
});