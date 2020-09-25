import HttpStatusCodes from "http-status-codes";
import BadRequestError from "../util/NotFoundError";
import NotFoundError from "../util/NotFoundError";
import UnauthorizedError from "../util/UnauthorizedError";

export default function genericErrorHandler(err, req, res, next) {
  console.log(err)
  if (err.isJoi) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({
      code: HttpStatusCodes.BAD_REQUEST,
      message: err.name,
      details: err.details.map((detail) => detail.message),
    });
  }

  if (err instanceof NotFoundError) {
    res.status(HttpStatusCodes.NOT_FOUND).json({
      code: HttpStatusCodes.NOT_FOUND,
      message: err.message,
    });
  }

  if (err instanceof BadRequestError) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({
      code: HttpStatusCodes.BAD_REQUEST,
      message: err.message,
    });
  }

  if (err instanceof UnauthorizedError || err.name === 'UnauthorizedError') {
    res.status(HttpStatusCodes.UNAUTHORIZED).json({
      code: HttpStatusCodes.UNAUTHORIZED,
      message: err.message,
    });
  }

  const errorMessage = err.message
    ? err.message
    : HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR);

  res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: errorMessage,
  });
}
