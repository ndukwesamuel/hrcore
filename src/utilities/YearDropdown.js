const YearDropdown = () => {
    const start = (new Date()).getFullYear();
    const years = [];

    for (let i = start; i >= 1970; i--) {
        years.push(<option key={i} value={i}>{i}</option>)
    }
    return years;
}

export default YearDropdown;