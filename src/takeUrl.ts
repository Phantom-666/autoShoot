const takeUrl = (array: string[]) => {
    const protocol = array[2].split(':')[0]
    const count = Number(array[3])
    return {
        protocol,
        url : array[2],
        count
    }
}

export { takeUrl }