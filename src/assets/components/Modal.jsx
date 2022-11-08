import React, { Component } from 'react'
import Portal from './Portal'
import { CSSTransition } from 'react-transition-group'
import '../css/modal.css'

export default class Modal extends Component {

    render() {

        const { children, toggle, active } = this.props;
    
        return (
            <Portal>
                {!active && (
                    <CSSTransition
                        appear
                        in
                        classNames="modal-transition"
                        timeout={900}
                    >
                        <div style={styles.wrapper}>
                            <div style={styles.window}>
                                
                                <div>{children}</div>
                            </div>
                            <div onClick={toggle} style={styles.background} />

                        </div>
                    </CSSTransition>
                )}
            </Portal>
        )
    }
}

const styles = {
    wrapper: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1% 10%',
    },
    window: {
        position: 'relative',
        background: '#fff',
        borderRadius: 30,
        padding: 15,
        boxShadow: '2px, 2px, 10px, rgba(0,0,0,0,3)',
        zIndex: 10,
        top: 0,        
    },
    background: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        background: '#000',
        opacity: .7,
    }
}
