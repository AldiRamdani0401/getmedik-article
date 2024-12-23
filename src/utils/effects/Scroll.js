  // Handle Scroll
  const handleScroll = (element, setValue) => {
    const scrollTop = element.scrollTop;
    if (scrollTop > 1) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  export default handleScroll;