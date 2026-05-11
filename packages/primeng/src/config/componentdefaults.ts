import { InjectionToken } from '@angular/core';

export interface AccordionDefaults {
    expandIcon?: string;
    collapseIcon?: string;
    transitionOptions?: string;
}

export interface AnimateOnScrollDefaults {
    enterClass?: string;
    leaveClass?: string;
    rootMargin?: string;
    threshold?: number;
    once?: boolean;
}

export interface AutocompleteDefaults {
    minLength?: number;
    minQueryLength?: number;
    delay?: number;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    autoHighlight?: boolean;
    forceSelection?: boolean;
    type?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    dropdownIcon?: string;
    unique?: boolean;
    group?: boolean;
    completeOnFocus?: boolean;
    showClear?: boolean;
    dropdown?: boolean;
    showEmptyMessage?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    addOnTab?: boolean;
    autocomplete?: string;
    optionGroupChildren?: string;
    optionGroupLabel?: string;
    optionLabel?: string | ((item: any) => string);
    optionValue?: string | ((item: any) => string);
    searchLocale?: boolean;
    optionDisabled?: string | ((item: any) => string);
    focusOnHover?: boolean;
    typeahead?: boolean;
    addOnBlur?: boolean;
    separator?: string | RegExp;
    autoOptionFocus?: boolean;
    selectOnFocus?: boolean;
    emptyMessage?: string;
}

export interface AvatarDefaults {
    size?: 'normal' | 'large' | 'xlarge';
    shape?: 'square' | 'circle';
}

export interface AvatarGroupDefaults {}

export interface BadgeDefaults {
    badgeSize?: 'large' | 'xlarge' | 'small' | null;
    size?: 'large' | 'xlarge' | 'small' | null;
    severity?: 'secondary' | 'info' | 'success' | 'warn' | 'danger' | 'contrast' | null;
}

export interface BlockUIDefaults {
    autoZIndex?: boolean;
    baseZIndex?: number;
}

export interface BreadcrumbDefaults {
    homeAriaLabel?: string;
}

export interface ButtonDefaults {
    text?: boolean;
    plain?: boolean;
    raised?: boolean;
    size?: 'small' | 'large';
    outlined?: boolean;
    rounded?: boolean;
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    loadingIcon?: string;
    severity?: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | string;
    variant?: 'outlined' | 'text';
    link?: boolean;
}

export interface CarouselDefaults {
    numVisible?: number;
    numScroll?: number;
    orientation?: 'horizontal' | 'vertical';
    verticalViewPortHeight?: string;
    circular?: boolean;
    showIndicators?: boolean;
    showNavigators?: boolean;
    autoplayInterval?: number;
}

export interface CascadeSelectDefaults {
    focusOnHover?: boolean;
    selectOnFocus?: boolean;
    autoOptionFocus?: boolean;
    optionLabel?: string;
    optionValue?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string[] | string;
    showClear?: boolean;
}

export interface ChartDefaults {
    type?: 'bar' | 'line' | 'scatter' | 'bubble' | 'pie' | 'doughnut' | 'polarArea' | 'radar';
    width?: string;
    height?: string;
    responsive?: boolean;
}

export interface CheckboxDefaults {
    binary?: boolean;
    indeterminate?: boolean;
    trueValue?: any;
    falseValue?: any;
    checkboxIcon?: string;
}

export interface ChipDefaults {
    removable?: boolean;
    removeIcon?: string;
}

export interface ColorPickerDefaults {
    inline?: boolean;
    format?: 'hex' | 'rgb' | 'hsb';
    autoZIndex?: boolean;
    defaultColor?: string;
}

export interface ConfirmDialogDefaults {
    acceptIcon?: string;
    acceptLabel?: string;
    acceptVisible?: boolean;
    rejectIcon?: string;
    rejectLabel?: string;
    rejectVisible?: boolean;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    blockScroll?: boolean;
    rtl?: boolean;
    closable?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    transitionOptions?: string;
    focusTrap?: boolean;
    defaultFocus?: 'accept' | 'reject' | 'close' | 'none';
    breakpoints?: any;
    modal?: boolean;
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    draggable?: boolean;
}

export interface ConfirmPopupDefaults {
    defaultFocus?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
}

export interface ContextMenuDefaults {
    triggerEvent?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    breakpoint?: string;
    pressDelay?: number;
}

export interface DataViewDefaults {
    paginator?: boolean;
    rows?: number;
    pageLinks?: number;
    rowsPerPageOptions?: number[] | any[];
    paginatorPosition?: 'top' | 'bottom' | 'both';
    alwaysShowPaginator?: boolean;
    paginatorDropdownScrollHeight?: string;
    currentPageReportTemplate?: string;
    showCurrentPageReport?: boolean;
    showJumpToPageDropdown?: boolean;
    showFirstLastIcon?: boolean;
    showPageLinks?: boolean;
    lazyLoadOnInit?: boolean;
    emptyMessage?: string;
    filterLocale?: string;
    loadingIcon?: string;
    layout?: 'list' | 'grid';
}

export interface DatepickerDefaults {
    iconDisplay?: 'input' | 'button';
    dateFormat?: string;
    multipleSeparator?: string;
    rangeSeparator?: string;
    inline?: boolean;
    showOtherMonths?: boolean;
    selectOtherMonths?: boolean;
    showIcon?: boolean;
    icon?: string;
    readonlyInput?: boolean;
    shortYearCutoff?: any;
    hourFormat?: string;
    timeOnly?: boolean;
    stepHour?: number;
    stepMinute?: number;
    stepSecond?: number;
    showSeconds?: boolean;
    showOnFocus?: boolean;
    showWeek?: boolean;
    startWeekFromFirstDayOfYear?: boolean;
    showClear?: boolean;
    dataType?: string;
    selectionMode?: 'single' | 'multiple' | 'range';
    maxDateCount?: number;
    showButtonBar?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    keepInvalid?: boolean;
    hideOnDateTimeSelect?: boolean;
    touchUI?: boolean;
    timeSeparator?: string;
    focusTrap?: boolean;
    showTime?: boolean;
    numberOfMonths?: number;
    firstDayOfWeek?: number;
    view?: 'date' | 'month' | 'year';
}

export interface DialogDefaults {
    draggable?: boolean;
    resizable?: boolean;
    modal?: boolean;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    closable?: boolean;
    showHeader?: boolean;
    blockScroll?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    minX?: number;
    minY?: number;
    focusOnShow?: boolean;
    maximizable?: boolean;
    keepInViewport?: boolean;
    focusTrap?: boolean;
    transitionOptions?: string;
    closeIcon?: string;
    closeTabindex?: string;
    minimizeIcon?: string;
    maximizeIcon?: string;
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    role?: string;
    breakpoints?: any;
}

export interface DividerDefaults {
    layout?: 'horizontal' | 'vertical';
    type?: 'solid' | 'dashed' | 'dotted';
    align?: 'left' | 'center' | 'right' | 'top' | 'bottom';
}

export interface DockDefaults {
    position?: 'bottom' | 'top' | 'left' | 'right';
    breakpoint?: string;
}

export interface DrawerDefaults {
    blockScroll?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    modal?: boolean;
    dismissible?: boolean;
    showCloseIcon?: boolean;
    closeOnEscape?: boolean;
    transitionOptions?: string;
    closable?: boolean;
}

export interface EditorDefaults {
    formats?: string[];
    modules?: object;
    bounds?: HTMLElement | string;
    scrollingContainer?: HTMLElement | string;
    debug?: string;
}

export interface FieldsetDefaults {
    toggleable?: boolean;
    transitionOptions?: string;
}

export interface FileUploadDefaults {
    method?: 'post' | 'put';
    multiple?: boolean;
    accept?: string;
    auto?: boolean;
    withCredentials?: boolean;
    maxFileSize?: number;
    invalidFileSizeMessageSummary?: string;
    invalidFileSizeMessageDetail?: string;
    invalidFileTypeMessageSummary?: string;
    invalidFileTypeMessageDetail?: string;
    invalidFileLimitMessageDetail?: string;
    invalidFileLimitMessageSummary?: string;
    previewWidth?: number;
    chooseLabel?: string;
    uploadLabel?: string;
    cancelLabel?: string;
    chooseIcon?: string;
    uploadIcon?: string;
    cancelIcon?: string;
    showUploadButton?: boolean;
    showCancelButton?: boolean;
    mode?: 'advanced' | 'basic';
    customUpload?: boolean;
    fileLimit?: number;
}

export interface FloatLabelDefaults {
    variant?: 'in' | 'over' | 'on';
}

export interface GalleriaDefaults {
    numVisible?: number;
    showItemNavigators?: boolean;
    showThumbnailNavigators?: boolean;
    showItemNavigatorsOnHover?: boolean;
    changeItemOnIndicatorHover?: boolean;
    circular?: boolean;
    autoPlay?: boolean;
    shouldStopAutoplayByClick?: boolean;
    transitionInterval?: number;
    showThumbnails?: boolean;
    thumbnailsPosition?: 'bottom' | 'top' | 'left' | 'right';
    verticalThumbnailViewPortHeight?: string;
    showIndicators?: boolean;
    showIndicatorsOnItem?: boolean;
    indicatorsPosition?: 'bottom' | 'top' | 'left' | 'right';
    baseZIndex?: number;
    fullScreen?: boolean;
}

export interface IconFieldDefaults {
    iconPosition?: 'right' | 'left';
}

export interface ImageDefaults {
    loading?: 'lazy' | 'eager';
    preview?: boolean;
}

export interface ImageCompareDefaults {}

export interface InplaceDefaults {
    closable?: boolean;
    preventClick?: boolean;
    closeIcon?: string;
}

export interface InputGroupDefaults {}

export interface InputMaskDefaults {
    type?: string;
    slotChar?: string;
    autoClear?: boolean;
    showClear?: boolean;
    unmask?: boolean;
    characterPattern?: string;
    autocomplete?: string;
    keepBuffer?: boolean;
    ariaRequired?: boolean;
}

export interface InputNumberDefaults {
    showButtons?: boolean;
    format?: boolean;
    buttonLayout?: string;
    incrementButtonIcon?: string;
    decrementButtonIcon?: string;
    allowEmpty?: boolean;
    locale?: string;
    localeMatcher?: any;
    mode?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    prefix?: string;
    suffix?: string;
    showClear?: boolean;
}

export interface InputOtpDefaults {
    length?: number;
    mask?: boolean;
    integerOnly?: boolean;
}

export interface InputTextDefaults {
    pSize?: 'large' | 'small';
}

export interface KnobDefaults {
    valueColor?: string;
    rangeColor?: string;
    textColor?: string;
    valueTemplate?: string;
    size?: number;
    min?: number;
    max?: number;
    step?: number;
    strokeWidth?: number;
    showValue?: boolean;
}

export interface ListboxDefaults {
    autoOptionFocus?: boolean;
    selectOnFocus?: boolean;
    searchLocale?: boolean;
    focusOnHover?: boolean;
    scrollHeight?: string;
    multiple?: boolean;
    checkbox?: boolean;
    filter?: boolean;
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | string;
    filterLocale?: string;
    metaKeySelection?: boolean;
    showToggleAll?: boolean;
    optionLabel?: string;
    optionValue?: string;
    optionGroupChildren?: string;
    optionGroupLabel?: string;
    optionDisabled?: string | ((item: any) => boolean);
    emptyFilterMessage?: string;
    emptyMessage?: string;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
}

export interface MegaMenuDefaults {
    orientation?: 'horizontal' | 'vertical' | string;
    breakpoint?: string;
    scrollHeight?: string;
}

export interface MenuDefaults {
    popup?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
}

export interface MenubarDefaults {
    autoZIndex?: boolean;
    baseZIndex?: number;
    autoDisplay?: boolean;
    autoHide?: boolean;
    breakpoint?: string;
    autoHideDelay?: number;
}

export interface MessageDefaults {
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast' | null;
    escape?: boolean;
    closable?: boolean;
    icon?: string;
    closeIcon?: string;
    life?: number;
    size?: 'large' | 'small';
    variant?: 'outlined' | 'text' | 'simple';
}

export interface MeterGroupDefaults {
    labelPosition?: 'start' | 'end';
    labelOrientation?: 'horizontal' | 'vertical';
    orientation?: 'horizontal' | 'vertical';
}

export interface MultiSelectDefaults {
    group?: boolean;
    filter?: boolean;
    filterLocale?: string;
    displaySelectedLabel?: boolean;
    maxSelectedLabels?: number | null;
    selectionLimit?: number;
    selectedItemsLabel?: string;
    showToggleAll?: boolean;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    resetFilterOnHide?: boolean;
    dropdownIcon?: string;
    chipIcon?: string;
    optionLabel?: string;
    optionValue?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionDisabled?: string | ((item: any) => boolean);
    scrollHeight?: string;
    showHeader?: boolean;
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | string;
    tooltip?: string;
    tooltipPosition?: 'top' | 'left' | 'right' | 'bottom';
    tooltipPositionStyle?: string;
    display?: string | 'comma' | 'chip';
    autocomplete?: string;
    showClear?: boolean;
    focusOnHover?: boolean;
    selectOnFocus?: boolean;
    autoOptionFocus?: boolean;
    highlightOnSelect?: boolean;
    autofocusFilter?: boolean;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    loadingIcon?: string;
}

export interface OrderListDefaults {
    responsive?: boolean;
    filterLocale?: string;
    metaKeySelection?: boolean;
    dragdrop?: boolean;
    controlsPosition?: 'left' | 'right';
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte';
    breakpoint?: string;
    stripedRows?: boolean;
    scrollHeight?: string;
    autoOptionFocus?: boolean;
}

export interface OrganizationChartDefaults {
    selectionMode?: 'single' | 'multiple' | null;
    collapsible?: boolean;
    preserveSpace?: boolean;
}

export interface PaginatorDefaults {
    pageLinkSize?: number;
    alwaysShow?: boolean;
    dropdownScrollHeight?: string;
    currentPageReportTemplate?: string;
    showCurrentPageReport?: boolean;
    showFirstLastIcon?: boolean;
    rowsPerPageOptions?: any[];
    showJumpToPageDropdown?: boolean;
    showJumpToPageInput?: boolean;
    showPageLinks?: boolean;
    locale?: string;
}

export interface PanelDefaults {
    toggleable?: boolean;
    iconPos?: 'start' | 'end' | 'center';
    showHeader?: boolean;
    toggler?: 'icon' | 'header';
    transitionOptions?: string;
    toggleButtonProps?: any;
}

export interface PanelMenuDefaults {
    multiple?: boolean;
    transitionOptions?: string;
}

export interface PasswordDefaults {
    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    mediumRegex?: string;
    strongRegex?: string;
    maxLength?: number;
    toggleMask?: boolean;
    autocomplete?: string;
    showClear?: boolean;
}

export interface PickListDefaults {
    responsive?: boolean;
    filterLocale?: string;
    metaKeySelection?: boolean;
    dragdrop?: boolean;
    showSourceFilter?: boolean;
    showTargetFilter?: boolean;
    showSourceControls?: boolean;
    showTargetControls?: boolean;
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | string;
    stripedRows?: boolean;
}

export interface PopoverDefaults {
    dismissable?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    focusOnShow?: boolean;
}

export interface ProgressBarDefaults {
    showValue?: boolean;
    unit?: string;
    mode?: 'determinate' | 'indeterminate';
    color?: string;
}

export interface ProgressSpinnerDefaults {
    strokeWidth?: string;
    fill?: string;
    animationDuration?: string;
}

export interface RadioButtonDefaults {
    binary?: boolean;
}

export interface RatingDefaults {
    stars?: number;
    iconOnClass?: string;
    iconOffClass?: string;
}

export interface ScrollerDefaults {
    step?: number;
    delay?: number;
    resizeDelay?: number;
    appendOnly?: boolean;
    inline?: boolean;
    showSpacer?: boolean;
    showLoader?: boolean;
    numToleratedItems?: number;
    autoSize?: boolean;
}

export interface ScrollPanelDefaults {
    step?: number;
}

export interface ScrollTopDefaults {
    target?: 'window' | 'parent';
    threshold?: number;
    behavior?: 'auto' | 'smooth';
}

export interface SelectDefaults {
    scrollHeight?: string;
    filter?: boolean;
    editable?: boolean;
    loadingIcon?: string;
    filterLocale?: string;
    checkmark?: boolean;
    dropdownIcon?: string;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    group?: boolean;
    showClear?: boolean;
    emptyFilterMessage?: string;
    emptyMessage?: string;
    resetFilterOnHide?: boolean;
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals' | 'in' | 'lt' | 'lte' | 'gt' | 'gte' | string;
    tooltip?: string;
    tooltipPosition?: 'top' | 'left' | 'right' | 'bottom';
    tooltipPositionStyle?: string;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    focusOnHover?: boolean;
    selectOnFocus?: boolean;
    autoOptionFocus?: boolean;
    autofocusFilter?: boolean;
}

export interface SelectButtonDefaults {
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    multiple?: boolean;
    allowEmpty?: boolean;
    unselectable?: boolean;
}

export interface SkeletonDefaults {
    shape?: string;
    animation?: string;
    borderRadius?: string;
    size?: string;
    width?: string;
    height?: string;
}

export interface SliderDefaults {
    animate?: boolean;
    min?: number;
    max?: number;
    orientation?: 'horizontal' | 'vertical';
    step?: number;
    range?: boolean;
}

export interface SpeedDialDefaults {
    direction?: 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right';
    transitionDelay?: number;
    type?: 'linear' | 'circle' | 'semi-circle' | 'quarter-circle';
    radius?: number;
    mask?: boolean;
    hideOnClickOutside?: boolean;
    showIcon?: string;
    hideIcon?: string;
    rotateAnimation?: boolean;
}

export interface SplitButtonDefaults {
    severity?: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null;
    raised?: boolean;
    rounded?: boolean;
    text?: boolean;
    outlined?: boolean;
    size?: 'small' | 'large' | null;
    plain?: boolean;
    iconPos?: 'left' | 'right';
    dropdownIcon?: string;
    dir?: string;
    menuButtonDisabled?: boolean;
    buttonDisabled?: boolean;
}

export interface SplitterDefaults {
    layout?: string;
    gutterSize?: number;
    step?: number;
    minSizes?: number[];
}

export interface StepperDefaults {}

export interface StepsDefaults {
    exact?: boolean;
}

export interface TableDefaults {
    pageLinks?: number;
    rowsPerPageOptions?: any[];
    alwaysShowPaginator?: boolean;
    paginatorPosition?: 'top' | 'bottom' | 'both';
    paginatorDropdownScrollHeight?: string;
    currentPageReportTemplate?: string;
    showCurrentPageReport?: boolean;
    showJumpToPageDropdown?: boolean;
    showJumpToPageInput?: boolean;
    showFirstLastIcon?: boolean;
    showPageLinks?: boolean;
    defaultSortOrder?: number;
    sortMode?: 'single' | 'multiple';
    resetPageOnSort?: boolean;
    selectionMode?: 'single' | 'multiple' | null;
    selectionPageOnly?: boolean;
    contextMenuSelectionMode?: string;
    metaKeySelection?: boolean;
    lazyLoadOnInit?: boolean;
    compareSelectionBy?: 'equals' | 'deepEquals';
    csvSeparator?: string;
    exportFilename?: string;
    filterDelay?: number;
    filterLocale?: string;
    rowExpandMode?: 'multiple' | 'single';
    scrollable?: boolean;
    rowGroupMode?: 'subheader' | 'rowspan';
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    virtualScrollDelay?: number;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    loadingIcon?: string;
    showLoader?: boolean;
    rowHover?: boolean;
    customSort?: boolean;
    showInitialSortBadge?: boolean;
    editMode?: 'cell' | 'row';
    size?: 'small' | 'large';
    showGridlines?: boolean;
    stripedRows?: boolean;
    groupRowsByOrder?: number;
    responsiveLayout?: string;
    breakpoint?: string;
    paginatorLocale?: string;
}

export interface TabsDefaults {}

export interface TabDefaults {}

export interface TabListDefaults {}

export interface TabPanelDefaults {}

export interface TabPanelsDefaults {}

export interface TagDefaults {
    severity?: 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' | null;
    rounded?: boolean;
    icon?: string;
}

export interface TerminalDefaults {
    welcomeMessage?: string;
    prompt?: string;
}

export interface TextareaDefaults {
    autoResize?: boolean;
    pSize?: 'large' | 'small';
}

export interface TieredMenuDefaults {
    popup?: boolean;
    autoZIndex?: boolean;
    baseZIndex?: number;
    autoDisplay?: boolean;
    breakpoint?: string;
}

export interface TimelineDefaults {
    align?: string;
    layout?: 'vertical' | 'horizontal';
}

export interface ToastDefaults {
    autoZIndex?: boolean;
    baseZIndex?: number;
    life?: number;
    position?: string;
    preventOpenDuplicates?: boolean;
    preventDuplicates?: boolean;
    showTransformOptions?: string;
    hideTransformOptions?: string;
    breakpoints?: { [key: string]: any };
}

export interface ToggleButtonDefaults {
    onLabel?: string;
    offLabel?: string;
    onIcon?: string;
    offIcon?: string;
    iconPos?: 'left' | 'right';
    size?: 'large' | 'small';
    allowEmpty?: boolean;
}

export interface ToggleSwitchDefaults {
    trueValue?: any;
    falseValue?: any;
}

export interface ToolbarDefaults {}

export interface TooltipDefaults {
    tooltipPosition?: 'right' | 'left' | 'top' | 'bottom' | string;
    tooltipEvent?: 'hover' | 'focus' | 'both';
    positionStyle?: string;
    escape?: boolean;
    showDelay?: number;
    hideDelay?: number;
    life?: number;
    positionTop?: number;
    positionLeft?: number;
    autoHide?: boolean;
    fitContent?: boolean;
    hideOnEscape?: boolean;
    showOnEllipsis?: boolean;
}

export interface TreeDefaults {
    selectionMode?: 'single' | 'multiple' | 'checkbox' | null;
    loadingMode?: 'mask' | 'icon';
    contextMenuSelectionMode?: 'separate' | 'joint';
    draggableScope?: any;
    droppableScope?: any;
    draggableNodes?: boolean;
    droppableNodes?: boolean;
    metaKeySelection?: boolean;
    propagateSelectionUp?: boolean;
    propagateSelectionDown?: boolean;
    loadingIcon?: string;
    emptyMessage?: string;
    validateDrop?: boolean;
    filter?: boolean;
    filterInputAutoFocus?: boolean;
    filterMode?: string;
    filterLocale?: string;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    indentation?: number;
    highlightOnSelect?: boolean;
}

export interface TreeSelectDefaults {
    scrollHeight?: string;
    metaKeySelection?: boolean;
    display?: 'comma' | 'chip';
    selectionMode?: 'single' | 'multiple' | 'checkbox';
    emptyMessage?: string;
    filter?: boolean;
    filterMode?: string;
    filterLocale?: string;
    filterInputAutoFocus?: boolean;
    propagateSelectionDown?: boolean;
    propagateSelectionUp?: boolean;
    showClear?: boolean;
    resetFilterOnHide?: boolean;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    loadingMode?: 'mask' | 'icon';
}

export interface TreeTableDefaults {
    pageLinks?: number;
    rowsPerPageOptions?: any[];
    alwaysShowPaginator?: boolean;
    paginatorPosition?: 'top' | 'bottom' | 'both';
    currentPageReportTemplate?: string;
    showCurrentPageReport?: boolean;
    showJumpToPageDropdown?: boolean;
    showFirstLastIcon?: boolean;
    showPageLinks?: boolean;
    defaultSortOrder?: number;
    sortMode?: 'single' | 'multiple';
    resetPageOnSort?: boolean;
    customSort?: boolean;
    selectionMode?: string;
    contextMenuSelectionMode?: string;
    metaKeySelection?: boolean;
    lazyLoadOnInit?: boolean;
    compareSelectionBy?: string;
    filterDelay?: number;
    filterMode?: string;
    filterLocale?: string;
    paginatorLocale?: string;
    resizableColumns?: boolean;
    columnResizeMode?: string;
    reorderableColumns?: boolean;
    loadingIcon?: string;
    showLoader?: boolean;
    rowHover?: boolean;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    virtualScrollItemSize?: number;
    virtualScrollDelay?: number;
}

export interface ComponentsDefaults {
    accordion?: Partial<AccordionDefaults>;
    animateOnScroll?: Partial<AnimateOnScrollDefaults>;
    autocomplete?: Partial<AutocompleteDefaults>;
    avatar?: Partial<AvatarDefaults>;
    avatarGroup?: Partial<AvatarGroupDefaults>;
    badge?: Partial<BadgeDefaults>;
    blockUI?: Partial<BlockUIDefaults>;
    breadcrumb?: Partial<BreadcrumbDefaults>;
    button?: Partial<ButtonDefaults>;
    carousel?: Partial<CarouselDefaults>;
    cascadeSelect?: Partial<CascadeSelectDefaults>;
    chart?: Partial<ChartDefaults>;
    checkbox?: Partial<CheckboxDefaults>;
    chip?: Partial<ChipDefaults>;
    colorPicker?: Partial<ColorPickerDefaults>;
    confirmDialog?: Partial<ConfirmDialogDefaults>;
    confirmPopup?: Partial<ConfirmPopupDefaults>;
    contextMenu?: Partial<ContextMenuDefaults>;
    dataView?: Partial<DataViewDefaults>;
    datepicker?: Partial<DatepickerDefaults>;
    dialog?: Partial<DialogDefaults>;
    divider?: Partial<DividerDefaults>;
    dock?: Partial<DockDefaults>;
    drawer?: Partial<DrawerDefaults>;
    editor?: Partial<EditorDefaults>;
    fieldset?: Partial<FieldsetDefaults>;
    fileUpload?: Partial<FileUploadDefaults>;
    floatLabel?: Partial<FloatLabelDefaults>;
    galleria?: Partial<GalleriaDefaults>;
    iconField?: Partial<IconFieldDefaults>;
    image?: Partial<ImageDefaults>;
    imageCompare?: Partial<ImageCompareDefaults>;
    inplace?: Partial<InplaceDefaults>;
    inputGroup?: Partial<InputGroupDefaults>;
    inputMask?: Partial<InputMaskDefaults>;
    inputNumber?: Partial<InputNumberDefaults>;
    inputOtp?: Partial<InputOtpDefaults>;
    inputText?: Partial<InputTextDefaults>;
    knob?: Partial<KnobDefaults>;
    listbox?: Partial<ListboxDefaults>;
    megaMenu?: Partial<MegaMenuDefaults>;
    menu?: Partial<MenuDefaults>;
    menubar?: Partial<MenubarDefaults>;
    message?: Partial<MessageDefaults>;
    meterGroup?: Partial<MeterGroupDefaults>;
    multiSelect?: Partial<MultiSelectDefaults>;
    orderList?: Partial<OrderListDefaults>;
    organizationChart?: Partial<OrganizationChartDefaults>;
    paginator?: Partial<PaginatorDefaults>;
    panel?: Partial<PanelDefaults>;
    panelMenu?: Partial<PanelMenuDefaults>;
    password?: Partial<PasswordDefaults>;
    pickList?: Partial<PickListDefaults>;
    popover?: Partial<PopoverDefaults>;
    progressBar?: Partial<ProgressBarDefaults>;
    progressSpinner?: Partial<ProgressSpinnerDefaults>;
    radioButton?: Partial<RadioButtonDefaults>;
    rating?: Partial<RatingDefaults>;
    scroller?: Partial<ScrollerDefaults>;
    scrollPanel?: Partial<ScrollPanelDefaults>;
    scrollTop?: Partial<ScrollTopDefaults>;
    select?: Partial<SelectDefaults>;
    selectButton?: Partial<SelectButtonDefaults>;
    skeleton?: Partial<SkeletonDefaults>;
    slider?: Partial<SliderDefaults>;
    speedDial?: Partial<SpeedDialDefaults>;
    splitButton?: Partial<SplitButtonDefaults>;
    splitter?: Partial<SplitterDefaults>;
    stepper?: Partial<StepperDefaults>;
    steps?: Partial<StepsDefaults>;
    table?: Partial<TableDefaults>;
    tabs?: Partial<TabsDefaults>;
    tab?: Partial<TabDefaults>;
    tabList?: Partial<TabListDefaults>;
    tabPanel?: Partial<TabPanelDefaults>;
    tabPanels?: Partial<TabPanelsDefaults>;
    tag?: Partial<TagDefaults>;
    terminal?: Partial<TerminalDefaults>;
    textarea?: Partial<TextareaDefaults>;
    tieredMenu?: Partial<TieredMenuDefaults>;
    timeline?: Partial<TimelineDefaults>;
    toast?: Partial<ToastDefaults>;
    toggleButton?: Partial<ToggleButtonDefaults>;
    toggleSwitch?: Partial<ToggleSwitchDefaults>;
    toolbar?: Partial<ToolbarDefaults>;
    tooltip?: Partial<TooltipDefaults>;
    tree?: Partial<TreeDefaults>;
    treeSelect?: Partial<TreeSelectDefaults>;
    treeTable?: Partial<TreeTableDefaults>;
}

export const PRIMENG_COMPONENT_DEFAULTS = new InjectionToken<ComponentsDefaults>('PRIMENG_COMPONENT_DEFAULTS');
