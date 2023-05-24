<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Usuario::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Usuario::create([
            'nome'=>$request->nome,
            'email'=>$request->email,
            'senha'=> bcrypt($request->senha),
            'cpf'=>$request->cpf,
            'nascimento'=>$request->nascimento,
            'telefone'=>$request->telefone,
            'cep'=>$request->cep,
            'uf'=>$request->uf,
            'localidade'=>$request->localidade,
            'bairro'=>$request->bairro,
        ]);
        return response()->json('successfully created!');


    }

    /**
     * Display the specified resource.
     */
    public function show(Usuario $usuario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return response()->json(Usuario::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $usuario = Usuario::whereId($id)->first();

        $usuario->update([
            'nome'=>$request->nome,
            'email'=>$request->email,
            'senha'=> bcrypt($request->senha),
            'cpf'=>$request->cpf,
            'nascimento'=>$request->nascimento,
            'telefone'=>$request->telefone,
            'cep'=>$request->cep,
            'uf'=>$request->uf,
            'localidade'=>$request->localidade,
            'bairro'=>$request->bairro,
        ]);
        return response()->json('sucess');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Usuario::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
