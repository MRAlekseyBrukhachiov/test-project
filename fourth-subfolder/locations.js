const parseLocations = (data) => {
    const locations = [];
    Object.keys(data).forEach(key => {
        const location = {
            id: key,
            name: data[key].name
        }
        if (data[key].children) location.children = parseLocations(data[key].children);
        if (data[key].objects) location.objects = parseObjects(data[key].objects);
        locations.push(location);
    })
    return locations;
}