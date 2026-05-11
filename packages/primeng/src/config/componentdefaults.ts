/**
 * Global component input defaults configuration.
 * Allows setting default values for component inputs at the application level.
 *
 * Usage with providePrimeNG:
 * ```typescript
 * providePrimeNG({
 *     defaults: {
 *         datePicker: {
 *             hourFormat: '24',
 *             showIcon: true
 *         },
 *         select: {
 *             filterMatchMode: 'contains',
 *             scrollHeight: '400px'
 *         }
 *     }
 * })
 * ```
 *
 * Component instances can still override any default by explicitly binding inputs.
 * @group Interfaces
 */

/**
 * Global component defaults configuration.
 * Each key corresponds to a PrimeNG component name in camelCase.
 * Values are partial objects of the component's input properties.
 * @group Interfaces
 */
export interface ComponentDefaults {
    [key: string]: Record<string, any> | undefined;
}
