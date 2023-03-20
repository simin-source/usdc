import Banner from '@/components/HomePage/banner/Banner';
import FourCard from '@/components/HomePage/fourCard/fourCard';
import LeftRight from '@/components/HomePage/leftRight/LeftRight';
import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';

export default defineComponent({
    name: 'Index',
    render() {
        return <Fragment>
            <Header parent="index" />
            <div id="top"></div>
            <Banner />
            <LeftRight/>
            <FourCard/>
            <Footer parent="index"/>
        </Fragment>;
    },
});