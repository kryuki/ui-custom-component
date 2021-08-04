import * as React from 'react';
import Parallax from 'react-rellax';
import './css/scrolling.css';
import { IComponentProps, IManywho } from './interfaces';

declare const manywho: IManywho;

class Ad extends React.Component<IComponentProps> {
    render() {
        return <Parallax speed={-12} strength={200} zIndex={-1}>
            <div className="right-side">
                <img
                    className="banner"
                    src="/images/ad.svg"
                />
            </div>
        </Parallax>;
    }
}

manywho.component.register('scrolling-ad', Ad);

export default Ad;
