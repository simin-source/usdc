import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import {} from './Index.module.scss';

export default defineComponent({
    name: 'Advantage',
    render() {
        return <Fragment>
        <Header parent="advantage" />
        <div style={{ marginTop: '150px' }}>advantage</div>
        <Footer parent="advantage"/>
    </Fragment>;
    },
});