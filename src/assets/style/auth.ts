export const authStyle = (height: number, width: number, image: string) => {
    return `
        .body--auth {
        min-height: ${height}px;
        max-height: ${height}px;
        min-width: ${width}px;
        max-width: ${width}px;

        background-image: url(${image});
        background-size: cover;
        filter: opacity(0.60);
        }
    `
}

// export const authTextInputStyle