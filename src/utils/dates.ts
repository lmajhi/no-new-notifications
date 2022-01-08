import moment from "moment"
export const getTime = (timeString: string) => {
    return moment(timeString).format("MMM DD YYYY")
}
