import {Amplify} from 'aws-amplify';
import { createTheme, defaultTheme } from '@aws-amplify/ui';
import { Button, useTheme, ThemeProvider,Authenticator ,ViewAmplify,AuthContainer} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';
Amplify.configure(awsExports);



export default function App() {
  const { tokens } = useTheme();
  const amplifyUITheme = {
    name: 'amplify-theme',
    tokens: {
      components: {
        button: {
          primary: {
            backgroundColor: { value: '{colors.green.80}' },
            _hover: {
              backgroundColor: { value: '{colors.green.90}' }
            },
            _focus: {
              backgroundColor: { value: '{colors.green.90}' },
            },
            _active: {
              backgroundColor: { value: '{colors.green.90}' },
            }
          },
          
        },
        
        sliderfield: {
          track: {
            backgroundColor: { value: '{colors.green.20}'}
          },
          range: {
            backgroundColor: { value: '{colors.green.60}' }
          }
        },
      
      }
    }
}


  return (

    
<div style={{ width: '100%', height: '100%'}}>


 
      <Authenticator > 
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}

      </Authenticator>

      <div >
      <iframe width="600" height="600" src="Testfirst.html"></iframe>
    </div>
   
  </div>
  );
}
