export interface ResponseModel {

  "error": boolean
  "statusCode": 200
  "message": string
  "data": {
    "recovered": Number
    "deaths": Number
    "confirmed": Number
    "lastChecked": string
    "lastReported": string
    "location": string

  }

}

export interface ResponseArrayModel {
  "recovered": 0
  "deaths": 0
  "confirmed": 9
  "lastChecked": ""
  "lastReported": ""
}