export function getTime(time: number): string {
	if (!time) {
		return "0:00";
	}

	var minutes = Math.floor(time / 60);
	var seconds = Math.abs(time % 60) + "";

	if (parseInt(seconds) < 10) {
		seconds = "0" + seconds;
	}

	if (minutes < 0) {
		return "-" + Math.abs(minutes + 1) + ":" + seconds;
	}

	return minutes + ":" + seconds;
}

export function splitAndCapitalize(value: string, splitOn = '_'): string {
	const splits = value.toLowerCase().split(splitOn);

	for (let i = 0; i < splits.length; i++) {
		splits[i] = splits[i][0].toUpperCase() + splits[i].substr(1);
	}

	return splits.join(' ');
}
