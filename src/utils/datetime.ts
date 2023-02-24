export const secondToHourMinuteSecond = (seconds: number): string => {
	let hoursStr: string;
	let minStr: string;
	let secStr: string;

	let totalTime: number = seconds;

	const hours: number = Math.trunc(totalTime / 3600);
	totalTime %= 3600;

	const min: number = Math.trunc(totalTime / 60);
	totalTime %= 60;

	const sec: number = Math.trunc(totalTime);

	if (hours < 10) hoursStr = `0${hours}`;
	if (min < 10) minStr = `0${min}`;
	if (sec < 10) secStr = `0${sec}`;
	if (hours > 0) {
		if (min > 10) {
			if (sec > 10) return `${hours}:${min}:${sec}`;
			return `${hours}:${min}:0${sec}`;
		}
		return `${hours}:0${min}:0${sec}`;
	}
	if (min > 0) {
		if (sec > 10) return `${min}:${sec}`;
		return `${min}:0${sec}`;
	}
	if (sec > 10) {
		return `0:${sec}`;
	}
	return `0:0${sec}`;
};

export const roundNumberTwoDecimals = (num: number): number => {
	return Math.round((num + Number.EPSILON) * 100) / 100;
};
