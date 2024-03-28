
export const modifyPayload = (values: any) => {
    const obj = { ...values };
    const data = JSON.stringify(obj);
    const fromData = new FormData();
    fromData.append("data", data)

    return fromData;
}