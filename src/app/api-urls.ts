import { environment } from "../environment/environment";

export const API_URLS = {
    signUp: environment.basePath + 'api/authenticate/opta/signUp',
    login: environment.basePath + 'api/authenticate/opta/login',
    // employeeSceduling: environment.basePath + 'api/employeeScheduling',
    // vehicleRouting: environment.basePath + 'api/vehicleRouting',
    // vehicleRoutingProblem: environment.basePath + 'api/vehicleRoutingProblem',
    // callCenter: environment.basePath + 'api/callCenter',
    // timeTable: environment.basePath + 'api/timetable',
    employeeScheduling: '/api/employeeScheduling',
    vehicleRouting: '/api/vehicleRouting',
    vehicleRoutingProblem: '/api/vehicleRoutingProblem',
    callCenter: '/api/callCenter',
    timeTable: '/api/timetable',
};
