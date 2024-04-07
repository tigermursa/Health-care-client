
export const modifyPayload = (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const fromData = new FormData();
    fromData.append("data", data)
    fromData.append("file", file as Blob)

    return fromData;
}