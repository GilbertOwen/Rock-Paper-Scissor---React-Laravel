<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HistoryController extends Controller
{
    public function index()
    {
        $histories = History::all();

        if (count($histories) === 0) {
            return response([
                "message" => "No history has been made yet",
                'data' => false
            ]);
        }
        $sortedHistories = $histories->sortByDesc('id');

        $wins = $sortedHistories->where('condition', 'win')->count();
        $losses = $sortedHistories->where('condition', 'lose')->count();
        $ties = $sortedHistories->where('condition', 'tie')->count();

        return response([
            'message' => "Successfully retrieved histories",
            "histories" => $sortedHistories->values()->all(),
            'wins' => $wins,
            'losses' => $losses,
            'ties' => $ties,
        ]);
    }

    public function store(Request $request)
    {
        $vd = Validator::make($request->all(), [
            'condition' => 'required|in:win,lose,tie',
            'user_move' => "required|in:rock,paper,scissor",
            'computer_move' => "required|in:rock,paper,scissor"
        ]);

        if ($vd->fails()) {
            return response([
                'message' => "Seems like there's a problem here, please try again",
                'errors' => $vd->errors()
            ], 422);
        }

        $history = $vd->validated();

        History::create($history);

        return response([
            'message' => "Successfully set histories"
        ]);
    }
}
