import {Service} from "@tsed/di";

@Service()
export class CalendarsService {

  helloCalendar() {
    console.log('Hello Calendar.');
  }
}