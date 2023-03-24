import Banner from '@/components/Use/banner/Banner';
import Cards from '@/components/Use/card/index';
import DropCards from '@/components/Use/dropCards/DropCards';
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
            <DropCards />
            <Cards />
            <Footer parent="use" />
        </Fragment>;
    },
});