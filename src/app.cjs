"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var bot_1 = require("@builderbot/bot");
var bot_2 = require("@builderbot/bot");
var provider_baileys_1 = require("@builderbot/provider-baileys");
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3008;
var discordFlow = (0, bot_1.addKeyword)('doc').addAnswer(['You can see the documentation here', '📄 https://builderbot.app/docs \n', 'Do you want to continue? *yes*'].join('\n'), { capture: true }, function (ctx_1, _a) { return __awaiter(void 0, [ctx_1, _a], void 0, function (ctx, _b) {
    var gotoFlow = _b.gotoFlow, flowDynamic = _b.flowDynamic;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (ctx.body.toLocaleLowerCase().includes('yes')) {
                    return [2 /*return*/, gotoFlow(registerFlow)];
                }
                return [4 /*yield*/, flowDynamic('Thanks!')];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
var welcomeFlow = (0, bot_1.addKeyword)(['hi', 'hello', 'hola'])
    .addAnswer("\uD83D\uDE4C Hello welcome to this *Chatbot*")
    .addAnswer([
    'I share with you the following links of interest about the project',
    '👉 *doc* to view the documentation',
].join('\n'), { delay: 800, capture: true }, function (ctx_1, _a) { return __awaiter(void 0, [ctx_1, _a], void 0, function (ctx, _b) {
    var fallBack = _b.fallBack;
    return __generator(this, function (_c) {
        if (!ctx.body.toLocaleLowerCase().includes('doc')) {
            return [2 /*return*/, fallBack('You should type *doc*')];
        }
        return [2 /*return*/];
    });
}); }, [discordFlow]);
var registerFlow = (0, bot_1.addKeyword)(bot_1.utils.setEvent('REGISTER_FLOW'))
    .addAnswer("What is your name?", { capture: true }, function (ctx_1, _a) { return __awaiter(void 0, [ctx_1, _a], void 0, function (ctx, _b) {
    var state = _b.state;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, state.update({ name: ctx.body })];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); })
    .addAnswer('What is your age?', { capture: true }, function (ctx_1, _a) { return __awaiter(void 0, [ctx_1, _a], void 0, function (ctx, _b) {
    var state = _b.state;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, state.update({ age: ctx.body })];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); })
    .addAction(function (_1, _a) { return __awaiter(void 0, [_1, _a], void 0, function (_, _b) {
    var flowDynamic = _b.flowDynamic, state = _b.state;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, flowDynamic("".concat(state.get('name'), ", thanks for your information!: Your age: ").concat(state.get('age')))];
            case 1:
                _c.sent();
                return [2 /*return*/];
        }
    });
}); });
var fullSamplesFlow = (0, bot_1.addKeyword)(['samples', bot_1.utils.setEvent('SAMPLES')])
    .addAnswer("\uD83D\uDCAA I'll send you a lot files...")
    .addAnswer("Send image from Local", { media: (0, path_1.join)(process.cwd(), 'assets', 'sample.png') })
    .addAnswer("Send video from URL", {
    media: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTJ0ZGdjd2syeXAwMjQ4aWdkcW04OWlqcXI3Ynh1ODkwZ25zZWZ1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LCohAb657pSdHv0Q5h/giphy.mp4',
})
    .addAnswer("Send audio from URL", { media: 'https://cdn.freesound.org/previews/728/728142_11861866-lq.mp3' })
    .addAnswer("Send file from URL", {
    media: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
});
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var adapterFlow, adapterProvider, adapterDB, _a, handleCtx, httpServer;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                adapterFlow = (0, bot_1.createFlow)([registerFlow, fullSamplesFlow]);
                adapterProvider = (0, bot_1.createProvider)(provider_baileys_1.BaileysProvider);
                adapterDB = new bot_2.MemoryDB();
                return [4 /*yield*/, (0, bot_1.createBot)({
                        flow: adapterFlow,
                        provider: adapterProvider,
                        database: adapterDB,
                    })];
            case 1:
                _a = _b.sent(), handleCtx = _a.handleCtx, httpServer = _a.httpServer;
                adapterProvider.server.post('/v1/messages', handleCtx(function (bot, req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, number, message, urlMedia;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = req.body, number = _a.number, message = _a.message, urlMedia = _a.urlMedia;
                                return [4 /*yield*/, bot.sendMessage(number, message, { media: urlMedia !== null && urlMedia !== void 0 ? urlMedia : null })];
                            case 1:
                                _b.sent();
                                return [2 /*return*/, res.end('sended')];
                        }
                    });
                }); }));
                adapterProvider.server.post('/v1/register', handleCtx(function (bot, req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, number, name;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = req.body, number = _a.number, name = _a.name;
                                return [4 /*yield*/, bot.dispatch('REGISTER_FLOW', { from: number, name: name })];
                            case 1:
                                _b.sent();
                                return [2 /*return*/, res.end('trigger')];
                        }
                    });
                }); }));
                adapterProvider.server.post('/v1/samples', handleCtx(function (bot, req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, number, name;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = req.body, number = _a.number, name = _a.name;
                                return [4 /*yield*/, bot.dispatch('SAMPLES', { from: number, name: name })];
                            case 1:
                                _b.sent();
                                return [2 /*return*/, res.end('trigger')];
                        }
                    });
                }); }));
                adapterProvider.server.post('/v1/blacklist', handleCtx(function (bot, req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, number, intent;
                    return __generator(this, function (_b) {
                        _a = req.body, number = _a.number, intent = _a.intent;
                        if (intent === 'remove')
                            bot.blacklist.remove(number);
                        if (intent === 'add')
                            bot.blacklist.add(number);
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        return [2 /*return*/, res.end(JSON.stringify({ status: 'ok', number: number, intent: intent }))];
                    });
                }); }));
                httpServer(+PORT);
                return [2 /*return*/];
        }
    });
}); };
main();
