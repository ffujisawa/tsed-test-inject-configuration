import {Controller, Inject, Configuration} from "@tsed/di";
import {Get} from "@tsed/schema";
import { CalendarsService } from "../../services/CalendarsService";

@Controller("/hello-world")
export class HelloWorldController {

  @Inject()
  private calendarsService: CalendarsService  // This line successfully Inject the service.

  @Inject()
  protected config: Configuration;  // This line falls to inject the service in production build. But using the --transpile-only option with tsnd successfully Inject.

  @Get("/")
  get() {
    this.calendarsService.helloCalendar();
    return "hello";
  }

  @Get("/configuration")
  getConfiguration() {
    // Using the --transpile-only option with tsnd allows the use of Configuration.
    // production build fails.
    console.log(this.config);
    return "config";
  }
}
