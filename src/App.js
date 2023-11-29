import React, { useEffect }  from 'react';
import Prism from 'prismjs';

import ChangeInput from './components/ChangeInput/ChangeInput';
import FocusInput from './components/FocusInput/FocusInput';
import Scenario from './components/Scenario';

import './prism.css';
import './App.css';

function App() {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <div className="App">

            <Scenario
                component={<ChangeInput />}
                description={
                    <ul>
                        <li>Use <code>getByLabelText</code> to select elements via <code>aria-label</code>.</li>
                        <li>Use <code>fireEvent.change</code> to simulate change events. Accepts an <code>event</code> object.</li>
                    </ul>
                }
                title="Testing for an Input Change"
            />

            <Scenario
                component={<FocusInput />}
                description={
                    <ul>
                        <li>Use <code>container.firstChild</code> is the DOM tree of the component and can be used in snapshot testing.</li>
                        <li>Use <code>getByPlaceholderText</code> to select via input <code>placeholder</code>.</li>
                        <li>Use <code>document.activeElement</code> is the same DOM node returned by the getter.</li>
                    </ul>
                }
                title="Testing a Focused Element"
            />

        </div>
    );
}

export default App;
