import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'danotes-deb1f',
          appId: '1:137723117543:web:925dacdb1363c350670742',
          storageBucket: 'danotes-deb1f.firebasestorage.app',
          apiKey: 'AIzaSyDwAbVZa3QDWueFtKMornUv9e-Xsdip6lo',
          authDomain: 'danotes-deb1f.firebaseapp.com',
          messagingSenderId: '137723117543',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
