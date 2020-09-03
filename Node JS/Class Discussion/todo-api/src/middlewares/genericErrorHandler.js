import HttpStatusCodes from "http-status-codes";
import NotFoundError from "../utils/NotFoundError";

export default function genericErrorHandler(err, req, res, next) {
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

  const errorMessage = err.message
    ? err.message
    : HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR);
  if (err) {
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
      message: errorMessage,
    });
  }
}
