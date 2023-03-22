import Footer from '@/views/footer/Footer';
import Header from '@/views/header/Header';
import { defineComponent, Fragment } from 'vue';
import { } from './Index.module.scss';

export default defineComponent({
    name: 'Use',
    render() {
        return <Fragment>
            <Header parent="use" />
            <div style={{ marginTop: '150px' }}> </div>
            <Footer parent="use" />
        </Fragment>;
    },
});