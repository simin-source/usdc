import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import AleftRight from '@/components/Asvantage/leftRight/index';
import AeightCard from '@/components/Asvantage/eightCard/index';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Advantage',
    render() {
        return <Fragment>
            <Header parent="advantage" />
            <AleftRight/>
            <AeightCard/>
        <Footer parent="advantage"/>
    </Fragment>;
    },
});