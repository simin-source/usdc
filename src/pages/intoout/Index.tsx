import Banner from '@/components/IntoOut/banner/Banner';
import Content from '@/components/IntoOut/content/Content';
import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Intoout',
    render() {
        return <Fragment>
        <Header parent="intoout" />
        <Banner/>
        <Content/>
        <Footer parent="intoout"/>
    </Fragment>;
    },
});