import AleftRight from '@/components/Asvantage/leftRight/index';
import DropCards from '@/components/Use/dropCards/DropCards';
import USevenCard from '@/components/Use/eightCards/index';
import MenuListUse from '@/components/Use/menuList/index';
import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
export default defineComponent({
    name: 'Use',
    render() {
        return <Fragment>
            <Header parent="use" />
            <AleftRight />
            <MenuListUse />
            <DropCards />
            <USevenCard />
            <Footer parent="use" />
        </Fragment>;
    },
});