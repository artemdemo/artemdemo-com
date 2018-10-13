export const resetButton = `
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    cursor: pointer;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable \`input\` types in iOS */
    -webkit-appearance: none;
`;

export const resetUl = `
    list-style-type: none;
    margin: none;
    margin: 0;
    padding: 0;
`;

export const clearFix = `
    &::after {
        content: '';
        display: table;
        clear: both;
    }
`;

export const secondaryText = `
    font-size: 85%;
    margin-bottom: 10px;
    opacity: 0.5;
    transition: 300ms;
    
    &:hover {
        opacity: 1;
    }
`;