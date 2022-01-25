// @ts-nocheck
/* eslint-disable */
declare let define: any;
interface ILogger {
  TRACE: ILogLevel;
  DEBUG: ILogLevel;
  INFO: ILogLevel;
  TIME: ILogLevel;
  WARN: ILogLevel;
  ERROR: ILogLevel;
  OFF: ILogLevel;

  trace(...x: any[]): void;
  debug(...x: any[]): void;
  info(...x: any[]): void;
  log(...x: any[]): void;
  warn(...x: any[]): void;
  error(...x: any[]): void;
  time(label: string): void;
  timeEnd(label: string): void;
  setLevel(level: ILogLevel): void;
  getLevel(): ILogLevel;
  enabledFor(level: ILogLevel): boolean;
  useDefaults(options?: ILoggerOpts): void;
  setHandler(logHandler: ILogHandler): void;
  get(name: string): ILogger;
  createDefaultHandler(options?: CreateDefaultHandlerOptions): ILogHandler;
}

export interface GlobalLogger extends ILogger {
  useDefaults(options?: ILoggerOpts): void;
  setHandler(logHandler: ILogHandler): void;
  get(name: string): ILogger;

  createDefaultHandler(options?: CreateDefaultHandlerOptions): ILogHandler;
}

export interface ILogHandler {
  (messages: any[], context: IContext): void;
}

export interface ILogLevel extends Object {
  value: number;
  name: string;
}

interface IContext extends Object {
  level: ILogLevel;
  name?: string;
}

interface CreateDefaultHandlerOptions {
  formatter?: ILogHandler;
}

export interface ILoggerOpts extends Object {
  defaultLevel?: ILogLevel;
  formatter?: ILogHandler;
}

const Logger: Partial<GlobalLogger> = {};

(function(global) {
  let logHandler: ILogHandler;
  const contextualLoggersByNameMap: { [index: string]: any } = {};
  const bind = function(scope, func) {
    return function() {
      return func.apply(scope, arguments);
    };
  };
  const merge: any = function() {
    const args = arguments;
    const target = args[0];
    let key;
    let i;
    for (i = 1; i < args.length; i++) {
      for (key in args[i]) {
        if (!(key in target) && args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }
    return target;
  };
  const defineLogLevel = function(value, name) {
    return { value, name };
  };
  Logger.TRACE = defineLogLevel(1, 'TRACE');
  Logger.DEBUG = defineLogLevel(2, 'DEBUG');
  Logger.INFO = defineLogLevel(3, 'INFO');
  Logger.TIME = defineLogLevel(4, 'TIME');
  Logger.WARN = defineLogLevel(5, 'WARN');
  Logger.ERROR = defineLogLevel(8, 'ERROR');
  Logger.OFF = defineLogLevel(99, 'OFF');

  class ContextualLogger {
    context: any;

    log: any;

    constructor(defaultContext) {
      this.context = defaultContext;
      this.setLevel(defaultContext.filterLevel);
      this.log = this.info;
    }

    setLevel(newLevel) {
      if (newLevel && 'value' in newLevel) {
        this.context.filterLevel = newLevel;
      }
    }

    getLevel() {
      return this.context.filterLevel;
    }

    enabledFor(lvl) {
      const { filterLevel } = this.context;
      return lvl.value >= filterLevel.value;
    }

    trace() {
      this.invoke(Logger.TRACE, arguments);
    }

    debug() {
      this.invoke(Logger.DEBUG, arguments);
    }

    info() {
      this.invoke(Logger.INFO, arguments);
    }

    warn() {
      this.invoke(Logger.WARN, arguments);
    }

    error() {
      this.invoke(Logger.ERROR, arguments);
    }

    time(label) {
      if (typeof label === 'string' && label.length > 0) {
        this.invoke(Logger.TIME, [label, 'start']);
      }
    }

    timeEnd(label) {
      if (typeof label === 'string' && label.length > 0) {
        this.invoke(Logger.TIME, [label, 'end']);
      }
    }

    invoke(level, msgArgs) {
      if (logHandler && this.enabledFor(level)) {
        logHandler(msgArgs, merge({ level }, this.context));
      }
    }
  }
  const globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });
  (function() {
    const L = Logger;

    L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
    L.trace = bind(globalLogger, globalLogger.trace);
    L.debug = bind(globalLogger, globalLogger.debug);
    L.time = bind(globalLogger, globalLogger.time);
    L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
    L.info = bind(globalLogger, globalLogger.info);
    L.warn = bind(globalLogger, globalLogger.warn);
    L.error = bind(globalLogger, globalLogger.error);
    L.log = L.info;
  })();

  Logger.setHandler = function(func) {
    logHandler = func;
  };

  Logger.setLevel = function(level) {
    globalLogger.setLevel(level);
    for (const key in contextualLoggersByNameMap) {
      if (contextualLoggersByNameMap.hasOwnProperty(key)) {
        contextualLoggersByNameMap[key].setLevel(level);
      }
    }
  };

  Logger.getLevel = function() {
    return globalLogger.getLevel();
  };

  Logger.get = function(name) {
    return contextualLoggersByNameMap[name] || (contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name }, globalLogger.context)));
  };

  Logger.createDefaultHandler = function(options: any) {
    options = options || {};

    options.formatter =
      options.formatter ||
      function defaultMessageFormatter(messages, context) {
        if (context.name) {
          messages.unshift(`[${context.name}]`);
        }
      };
    const timerStartTimeByLabelMap: { [index: string]: any } = {};
    // Support for IE8+ (and other, slightly more sane environments)
    const invokeConsoleMethod = function(hdlr, messages) {
      // 调用时判断函数存在
      if (hdlr && console) {
        // 针对入参为function断定为lazy模式，重新执行一次
        for (var idx = 0; idx < messages.length; ++idx) {
          if (typeof messages[idx] === 'function') {
            messages[idx] = messages[idx].call(undefined);
          }
        }
        Function.prototype.apply.call(hdlr, console, messages);
      }
    };
    // IE8-9未打开控制台无console对象，此时应继续生成日志对象，否则控制台打开后依然无日志输入。
    return function(messages, context) {
      messages = Array.prototype.slice.call(messages);

      let hdlr = window.console && console.log;
      let timerLabel;

      if (context.level === Logger.TIME) {
        timerLabel = (context.name ? `[${context.name}] ` : '') + messages[0];

        if (messages[1] === 'start') {
          if (console.time) {
            console.time(timerLabel);
          } else {
            timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
          }
        } else if (console.timeEnd) {
          console.timeEnd(timerLabel);
        } else {
          invokeConsoleMethod(hdlr, [`${timerLabel}: ${new Date().getTime() - timerStartTimeByLabelMap[timerLabel]}ms`]);
        }
      } else {
        if (context.level === Logger.WARN && window.console && console.warn) {
          hdlr = console.warn;
        } else if (context.level === Logger.ERROR && window.console && console.error) {
          hdlr = console.error;
        } else if (context.level === Logger.INFO && window.console && console.info) {
          hdlr = console.info;
        } else if (context.level === Logger.DEBUG && window.console && console.debug) {
          hdlr = console.debug;
        } else if (context.level === Logger.TRACE && window.console && console.log) {
          hdlr = console.log;
        }
        options.formatter(messages, context);
        invokeConsoleMethod(hdlr, messages);
      }
    };
  };
  Logger.useDefaults = function(options) {
    (<any>Logger).setLevel((options && options.defaultLevel) || Logger.INFO);
    (<any>Logger).setHandler((<any>Logger).createDefaultHandler(options));
  };
  const options = {
    defaultLevel: Logger.INFO,
    formatter(messages, context) {
      messages.unshift(`[BotTimeLogger-${context.level.name}]`);
    }
  };
  (<any>Logger).setLevel((options && options.defaultLevel) || Logger.INFO);
})(window);
export default Logger;
