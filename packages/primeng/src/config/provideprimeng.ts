import { EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { PRIMENG_COMPONENT_DEFAULTS } from './componentdefaults';
import { PrimeNG } from './primeng';
import type { PrimeNGConfigType } from './primeng.types';

export const PRIME_NG_CONFIG = new InjectionToken<PrimeNGConfigType>('PRIME_NG_CONFIG');

export function providePrimeNG(...features: PrimeNGConfigType[]): EnvironmentProviders {
    const providers: any[] = features?.map((feature) => ({
        provide: PRIME_NG_CONFIG,
        useValue: feature,
        multi: false
    }));

    features?.forEach((feature) => {
        if (feature.defaults) {
            providers.push({
                provide: PRIMENG_COMPONENT_DEFAULTS,
                useValue: feature.defaults
            });
        }
    });

    const initializer = provideAppInitializer(() => {
        const PrimeNGConfig = inject(PrimeNG);
        features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
        return;
    });

    return makeEnvironmentProviders([...providers, initializer]);
}
